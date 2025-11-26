import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomQuestions, getQuestionWithAnswers } from "@/data/quizQuestions";
import { Trophy, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Quiz() {
  const [questions, setQuestions] = useState<ReturnType<typeof getQuestionWithAnswers>[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const randomQuestions = getRandomQuestions(10);
    const formattedQuestions = randomQuestions.map(q => getQuestionWithAnswers(q));
    setQuestions(formattedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const handleAnswer = (answer: string) => {
    if (answered) return;
    
    setSelectedAnswer(answer);
    setAnswered(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading quiz...</p>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="max-w-3xl mx-auto p-8">
        <Card className="p-8 bg-card border-border text-center">
          <Trophy className="h-20 w-20 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Quiz Complete!</h1>
          <p className="text-6xl font-bold text-primary mb-4">{score}/{questions.length}</p>
          <p className="text-2xl text-muted-foreground mb-6">{percentage.toFixed(0)}% Correct</p>
          
          <div className="mb-6">
            {percentage >= 80 && <p className="text-lg text-accent">Excellent work! You've mastered TypeScript! 🎉</p>}
            {percentage >= 60 && percentage < 80 && <p className="text-lg text-primary">Great job! Keep practicing! 👍</p>}
            {percentage < 60 && <p className="text-lg text-muted-foreground">Good effort! Review the topics and try again! 💪</p>}
          </div>

          <Button onClick={startQuiz} size="lg" className="bg-primary hover:bg-primary/90">
            <RotateCcw className="h-5 w-5 mr-2" />
            Take Quiz Again
          </Button>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-foreground">TypeScript Quiz</h1>
          <span className="text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 bg-card border-border mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{question.question}</h2>
        
        <div className="space-y-3">
          {question.answers.map((answer, index) => {
            const isCorrect = answer === question.correctAnswer;
            const isSelected = answer === selectedAnswer;
            
            let className = "w-full p-4 text-left border-2 rounded-lg transition-all ";
            
            if (!answered) {
              className += "border-border hover:border-primary hover:bg-secondary cursor-pointer";
            } else if (isSelected) {
              className += isCorrect 
                ? "border-accent bg-accent/20 cursor-default" 
                : "border-destructive bg-destructive/20 cursor-default";
            } else if (isCorrect) {
              className += "border-accent bg-accent/20 cursor-default";
            } else {
              className += "border-border bg-muted cursor-default opacity-60";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(answer)}
                className={className}
                disabled={answered}
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">{answer}</span>
                  {answered && isCorrect && <CheckCircle2 className="h-5 w-5 text-accent" />}
                  {answered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      {answered && (
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            Score: <span className="text-primary font-bold">{score}</span> / {currentQuestion + 1}
          </p>
          <Button onClick={handleNext} size="lg" className="bg-primary hover:bg-primary/90">
            {currentQuestion < questions.length - 1 ? "Next Question" : "Show Results"}
          </Button>
        </div>
      )}
    </div>
  );
}
