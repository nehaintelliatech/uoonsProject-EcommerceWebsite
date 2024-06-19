// src/components/FrequentlyAskedQuestions.js
import React, { useState } from 'react';
import { FaQuestionCircle, FaCommentAlt, FaPlusCircle } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is the warranty period for this laptop?',
    answer: 'The warranty period for this laptop is 1 year.',
  },
  {
    question: 'Does this laptop come with pre-installed software?',
    answer: 'Yes, the laptop comes with Windows 11 and Microsoft Office pre-installed.',
  },
  {
    question: 'Can I upgrade the RAM on this laptop?',
    answer: 'Yes, you can upgrade the RAM up to 16GB.',
  },
  {
    question: 'Is the keyboard backlit?',
    answer: 'No, the keyboard is not backlit.',
  },
];

const FrequentlyAskedQuestions = () => {
  const [questions, setQuestions] = useState(faqData);
  const [newQuestion, setNewQuestion] = useState('');

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        {
          question: newQuestion,
          answer: 'Thank you for your question. We will provide an answer soon.',
        },
      ]);
      setNewQuestion('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pt-4">
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="text-blue-500 mr-2" />
              <h4 className="font-semibold">{faq.question}</h4>
            </div>
            <div className="flex items-center mb-2">
              <FaCommentAlt className="text-green-500 mr-2" />
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Post a Question</h3>
        <div className="flex items-center mb-4">
          <FaQuestionCircle className="text-gray-500 mr-2" />
          <input
            type="text"
            value={newQuestion}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"
          onClick={handleSubmitQuestion}
        >
          <FaPlusCircle className="mr-2" /> Submit Question
        </button>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
