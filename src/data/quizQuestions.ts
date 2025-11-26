export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the type of a variable declared with 'let x = 5'?",
    correctAnswer: "number",
    incorrectAnswers: ["string", "boolean", "any", "void", "never", "banana", "undefined", "object", "Pizza"]
  },
  {
    question: "Which keyword is used to define an interface in TypeScript?",
    correctAnswer: "interface",
    incorrectAnswers: ["class", "type", "struct", "define", "contract", "blueprint", "schema", "model", "unicorn"]
  },
  {
    question: "What does the 'readonly' modifier do?",
    correctAnswer: "Prevents property modification after initialization",
    incorrectAnswers: ["Makes property private", "Makes property optional", "Removes property from type", "Makes property public", "Adds documentation", "Makes code taste better", "Encrypts the value", "Sends property to the cloud", "Makes it glow in the dark"]
  },
  {
    question: "What is the return type of a function that doesn't return anything?",
    correctAnswer: "void",
    incorrectAnswers: ["null", "undefined", "never", "empty", "nothing", "air", "silence", "zero", "404"]
  },
  {
    question: "Which symbol is used for union types?",
    correctAnswer: "|",
    incorrectAnswers: ["&", "||", "&&", "+", "~", "🦄", "@", "#", "💻"]
  },
  {
    question: "What is a tuple in TypeScript?",
    correctAnswer: "An array with fixed length and types",
    incorrectAnswers: ["A dynamic array", "A special object", "A function type", "A class decorator", "A module export", "A small dog breed", "A type of loop", "A variable declaration", "A French dessert"]
  },
  {
    question: "How do you specify optional properties in an interface?",
    correctAnswer: "Using ? after property name",
    incorrectAnswers: ["Using ! after property name", "Using * after property name", "Using optional keyword", "Using maybe keyword", "Using perhaps keyword", "Asking nicely", "Wrapping in parentheses", "Using undefined type", "Crossing fingers"]
  },
  {
    question: "What is the 'any' type?",
    correctAnswer: "A type that allows any value",
    incorrectAnswers: ["A type for numbers only", "A type for strings only", "A type for objects only", "A restricted type", "A secure type", "The friend of all types", "An error type", "A magical type", "TypeScript's surrender flag"]
  },
  {
    question: "What does the 'extends' keyword do in generics?",
    correctAnswer: "Constrains the generic type",
    incorrectAnswers: ["Copies a type", "Deletes a type", "Creates inheritance", "Merges types", "Extends deadline", "Makes code longer", "Adds properties", "Clones objects", "Stretches the code"]
  },
  {
    question: "What is type inference?",
    correctAnswer: "Automatic type detection by TypeScript",
    incorrectAnswers: ["Manual type annotation", "Type conversion", "Type removal", "Type checking", "Type guessing game", "Mind reading", "Type documentation", "Type validation", "Compiler's sixth sense"]
  },
  {
    question: "What is the difference between 'interface' and 'type'?",
    correctAnswer: "Interfaces can be extended, types use intersections",
    incorrectAnswers: ["No difference", "Types are faster", "Interfaces are deprecated", "Types are older", "Interfaces are better", "They taste different", "Interfaces are blue", "Types are private", "One is French"]
  },
  {
    question: "What is a generic type parameter?",
    correctAnswer: "A placeholder for types in reusable code",
    incorrectAnswers: ["A fixed type", "An error message", "A runtime value", "A constant", "A variable name", "A wild card", "A magic spell", "A compiler flag", "A programming meme"]
  },
  {
    question: "What does 'keyof' operator do?",
    correctAnswer: "Returns union of property names",
    incorrectAnswers: ["Returns property values", "Creates new keys", "Deletes keys", "Counts keys", "Locks the object", "Opens doors", "Makes music", "Sorts properties", "Encrypts keys"]
  },
  {
    question: "What is type assertion?",
    correctAnswer: "Telling compiler the type of a value",
    incorrectAnswers: ["Automatic type checking", "Type error", "Type removal", "Type conversion", "Being confident about types", "Yelling at compiler", "Type validation", "Type inference", "Type therapy"]
  },
  {
    question: "What is the 'never' type used for?",
    correctAnswer: "Values that never occur",
    incorrectAnswers: ["Nullable values", "Any values", "Optional values", "Future values", "Yesterday's values", "Impossible dreams", "Deleted values", "Hidden values", "Forbidden values"]
  },
  {
    question: "How do you define a function type?",
    correctAnswer: "Using arrow notation: (args) => returnType",
    incorrectAnswers: ["Using function keyword", "Using def keyword", "Using func notation", "Using lambda", "Using curry", "Drawing arrows", "Using emojis", "Wishful thinking", "Stack Overflow copy-paste"]
  },
  {
    question: "What are discriminated unions?",
    correctAnswer: "Unions with common discriminant property",
    incorrectAnswers: ["Separated unions", "Private unions", "Protected unions", "Merged unions", "Rebel unions", "Labor organizations", "Mathematical sets", "Database joins", "Social clubs"]
  },
  {
    question: "What is the purpose of 'as const'?",
    correctAnswer: "Creates literal types from values",
    incorrectAnswers: ["Makes variables constant", "Creates class constant", "Defines enum", "Creates type alias", "Makes things eternal", "Freezes time", "Adds readonly", "Prevents changes", "Makes constants trendy"]
  },
  {
    question: "What is a mapped type?",
    correctAnswer: "Type that transforms properties of another type",
    incorrectAnswers: ["Type with location data", "Type from map function", "Array type", "Object type", "GPS type", "Navigation type", "Geography lesson", "Travel itinerary", "Treasure map"]
  },
  {
    question: "What does 'Partial<T>' do?",
    correctAnswer: "Makes all properties optional",
    incorrectAnswers: ["Makes all properties required", "Removes some properties", "Adds new properties", "Copies properties", "Makes things incomplete", "Half-bakes types", "Partially works", "Sometimes works", "Gives up halfway"]
  },
  {
    question: "What is the purpose of 'Pick<T, K>'?",
    correctAnswer: "Creates type by selecting properties",
    incorrectAnswers: ["Removes properties", "Adds properties", "Copies all properties", "Validates properties", "Cherry picks bugs", "Chooses favorites", "Plays favorites", "Selects winners", "Harvest season"]
  },
  {
    question: "What does 'Omit<T, K>' do?",
    correctAnswer: "Creates type by excluding properties",
    incorrectAnswers: ["Includes only specified properties", "Adds properties", "Validates properties", "Counts properties", "Forgets things", "Memory loss", "Selective amnesia", "Ignores code review", "Deletes randomly"]
  },
  {
    question: "What is an enum in TypeScript?",
    correctAnswer: "A way to define named constants",
    incorrectAnswers: ["A type of array", "A class modifier", "A function type", "A loop structure", "Short for enumeration", "A counting system", "Roman numerals", "Numbered lists", "E-commerce platform"]
  },
  {
    question: "What is the 'unknown' type?",
    correctAnswer: "Type-safe alternative to any",
    incorrectAnswers: ["Same as any", "Same as never", "Same as void", "An error type", "Mystery type", "Stranger danger", "Anonymous type", "Secret type", "Incognito mode"]
  },
  {
    question: "What are index signatures?",
    correctAnswer: "Define types for dynamic property names",
    incorrectAnswers: ["Define array indices", "Create numbered properties", "Sign code files", "Create references", "Book indexes", "Library system", "Autographs", "Finger prints", "Signature moves"]
  },
  {
    question: "What is conditional type syntax?",
    correctAnswer: "T extends U ? X : Y",
    incorrectAnswers: ["if T then X else Y", "T ? X : Y", "T === U ? X : Y", "switch T case U", "Maybe X Maybe Y", "Flip a coin", "T || U", "T && U", "Random choice"]
  },
  {
    question: "What does 'infer' keyword do in conditional types?",
    correctAnswer: "Declares type variable to be inferred",
    incorrectAnswers: ["Checks type equality", "Converts types", "Removes types", "Validates types", "Makes educated guesses", "Reads minds", "Assumes things", "Deduces clues", "Sherlock Holmes mode"]
  },
  {
    question: "What is a type guard?",
    correctAnswer: "Function that narrows type at runtime",
    incorrectAnswers: ["Function that creates types", "Function that deletes types", "Function that validates data", "Function that converts types", "Security guard for types", "Type bouncer", "Type protector", "Type defender", "Type superhero"]
  },
  {
    question: "What is the 'this' type in TypeScript?",
    correctAnswer: "Refers to the type of current object",
    incorrectAnswers: ["Refers to global object", "Refers to parent object", "Creates new object", "Deletes current object", "Existential crisis", "Identity type", "Self-aware type", "Philosophical concept", "Mirror reflection"]
  },
  {
    question: "What are template literal types?",
    correctAnswer: "String types with template syntax",
    incorrectAnswers: ["Template for creating types", "Literal values only", "Number types", "Boolean types", "Design templates", "HTML templates", "Boilerplate code", "Copy-paste templates", "Reusable components"]
  },
  {
    question: "What is structural typing?",
    correctAnswer: "Type compatibility based on structure",
    incorrectAnswers: ["Type compatibility based on name", "Type hierarchy", "Type inheritance", "Type conversion", "Building types", "Architecture patterns", "Construction types", "Engineering principles", "Foundation types"]
  },
  {
    question: "What is the 'satisfies' operator?",
    correctAnswer: "Validates type without changing inferred type",
    incorrectAnswers: ["Changes variable type", "Creates new type", "Removes type", "Converts type", "Makes compiler happy", "Pleases the types", "Fulfills requirements", "Meets expectations", "Customer satisfaction"]
  },
  {
    question: "What are const assertions?",
    correctAnswer: "Make object properties readonly and literal",
    incorrectAnswers: ["Make variables constant", "Create class constants", "Define enums", "Create frozen objects", "Confident declarations", "Bold statements", "Strong opinions", "Absolute truths", "No backsies"]
  },
  {
    question: "What is module augmentation?",
    correctAnswer: "Adding declarations to existing modules",
    incorrectAnswers: ["Creating new modules", "Deleting modules", "Importing modules", "Exporting modules", "Upgrade modules", "Plastic surgery for types", "Enhancement surgery", "Type makeover", "Module renovation"]
  },
  {
    question: "What is nominal typing?",
    correctAnswer: "Type compatibility based on explicit names",
    incorrectAnswers: ["Type compatibility based on structure", "Type based on values", "Type based on size", "Type based on usage", "Named types only", "Proper nouns", "Famous types", "Celebrity types", "Types with identity papers"]
  },
];

export function getRandomQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getQuestionWithAnswers(question: QuizQuestion) {
  // Get 3 random incorrect answers, ensuring at most 1 is "silly"
  const sillyAnswers = question.incorrectAnswers.slice(6, 10); // Last 4 are silly
  const normalIncorrect = question.incorrectAnswers.slice(0, 6); // First 6 are normal
  
  const shuffledNormal = [...normalIncorrect].sort(() => Math.random() - 0.5);
  const shuffledSilly = [...sillyAnswers].sort(() => Math.random() - 0.5);
  
  // Maybe include 1 silly answer (50% chance)
  const includeSilly = Math.random() > 0.5;
  const incorrect = includeSilly 
    ? [...shuffledNormal.slice(0, 2), shuffledSilly[0]]
    : shuffledNormal.slice(0, 3);
  
  // Combine and shuffle all answers
  const allAnswers = [question.correctAnswer, ...incorrect].sort(() => Math.random() - 0.5);
  
  return {
    question: question.question,
    answers: allAnswers,
    correctAnswer: question.correctAnswer,
  };
}
