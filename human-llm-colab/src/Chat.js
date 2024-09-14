import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot, faSpinner } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSend = async () => {
    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', 
          messages: [...messages, newMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Add your OpenAI API key here
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = response.data.choices[0].message;
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }finally {
        setLoading(false);
    }
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <FontAwesomeIcon
              icon={msg.role === 'user' ? faUser : faRobot}
              className="message-icon"
            />
            <p className="message-content">{msg.content}</p>
          </div>
        ))}

        {/* Loading Indicator */}
        {loading && (
            <div className="message bot">
                <FontAwesomeIcon icon={faRobot} className="message-icon" />
                <p className="message-content">
                <FontAwesomeIcon icon={faSpinner} spin className="spinner-icon" />
                </p>
            </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
