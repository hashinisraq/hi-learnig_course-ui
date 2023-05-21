import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Courses from "./Pages/Courses";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Cart from "./Pages/Cart";
import AdminPanel from "./Pages/AdminPanel";
import Blogs from "./Pages/Blogs";
import { Button, Container, Spinner } from "react-bootstrap";
import usePaidCourses from "./hooks/usePaidCourses";
import AskDoubt from "./Pages/AskDoubt";
import ReadBlog from "./Pages/Blogs/components/ReadBlog";
import Lessons from "./Pages/PaidCourses/Lessons";
import YoutubePlayer from "./Pages/FreeCourses/YoutubePlayer/YoutubePlayer";
import CourseDetails from "./Pages/PaidCourses/Components/CourseDetails";
import { useEffect, useState } from "react";
import Board from "./Game/Board";
import Square from "./Game/Square";
import TermsConditions from "./Pages/TermsConditions";
import AdminRoute from "./Pages/Login/AdminRoute";


// Game
const defaultSquares = () => (new Array(9)).fill(null);
const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function App() {
  // disable right click 
  document.addEventListener('contextmenu', event => event.preventDefault());

  // first call to active the server
  const [paidCourses] = usePaidCourses();
  const len = paidCourses.length;

  // Game
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter(squareIndexes => {
        const squareValues = squareIndexes.map(index => squares[index]);
        return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
      });
    };
    const emptyIndexes = squares
      .map((square, index) => square === null ? index : null)
      .filter(val => val !== null);
    const playerWon = linesThatAre('x', 'x', 'x').length > 0;
    const computerWon = linesThatAre('o', 'o', 'o').length > 0;
    if (playerWon) {
      setWinner('x');
    }
    if (computerWon) {
      setWinner('o');
    }
    const putComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(index => squares[index] === null)[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre('o', null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(linesToContinue[0].filter(index => squares[index] === null)[0]);
        return;
      }

      const randomIndex = emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [squares]);

  function handleSquareClick(index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = 'x';
      setSquares([...newSquares]);
    }
  }


  if (len === 0) {
    return (
      <>
        <div className="pt-5 pb-3">
          <Container className="d-flex justify-content-center align-items-center">
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="dark" />
                <Button variant="light" disabled><b>Loading...</b></Button> <br />
              </div>
              <div className="text-secondary text-center">
                <b>
                  Please wait<br />
                  Or <br />
                  <span style={{ fontSize: "20px" }}>Play Tic Tac Toe</span>
                </b>

              </div>
            </div>
          </Container>
        </div>
        <Container className="d-flex align-items-center justify-content-center">
          <Board>
            {squares.map((square, index) =>
              <Square
                x={square === 'x' ? 1 : 0}
                o={square === 'o' ? 1 : 0}
                onClick={() => handleSquareClick(index)} />
            )}
          </Board>
          {!!winner && winner === 'x' && (
            <div className="result green">
              You WON!
            </div>
          )}
          {!!winner && winner === 'o' && (
            <div className="result red">
              You LOST!
            </div>
          )}
        </Container>
        <Container className="text-center py-2">
          <span style={{ fontSize: "20px" }}><b>Reload to play again</b></span>
        </Container>
      </>
    )
  }
  else {
    return (
      <>
        <Header />
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/home" element={<Home />}>
              </Route>
              <Route path="/terms_conditions" element={<TermsConditions />}>
              </Route>
              <Route path="/courses" element={<Courses />}>
              </Route>
              <Route path="/course/:courseTitle" element={<CourseDetails />}>
              </Route>
              <Route path="/blogs" element={<Blogs />}>
              </Route>
              <Route path="/blogs/:title" element={<ReadBlog />}>
              </Route>
              <Route path="/ask_doubt" element={<PrivateRoute><AskDoubt /></PrivateRoute>}>
              </Route>
              <Route path="/admin_panel" element={<AdminRoute><AdminPanel /></AdminRoute>}>
              </Route>
              <Route path="/addToCart/:courseTitle" element={<PrivateRoute><Cart /></PrivateRoute>}>
              </Route>
              <Route path="/freeCourses/:courseTitle/youtubePlayer" element={<PrivateRoute><YoutubePlayer /></PrivateRoute>}>
              </Route>
              <Route path="/paidCourses/:courseTitle/lessons" element={<PrivateRoute><Lessons /></PrivateRoute>}>
              </Route>
              <Route path="/login" element={<Login />}>
              </Route>
              <Route path="*" element={<NotFound />}>
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
        <Footer />
      </>
    )
  }
}

export default App;
