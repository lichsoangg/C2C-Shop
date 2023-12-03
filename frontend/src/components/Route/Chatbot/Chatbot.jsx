import React, {useEffect, useRef, useState} from 'react';
import InputEmoji from 'react-input-emoji';
const botAvatar = '/chatbot.png';
const ENDPOINT = 'wss://chatbot.rainscales.com/chat';
const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [newMessages, setNewMessages] = useState('');
  const [chat, setChat] = useState([]);
  const inputRef = useRef(null);
  const chatRef = useRef(null);
  const chatOptionRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [hasBotGreeted, setHasBotGreeted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const websocketRef = useRef(null);
  const [clientMsgs, setClientMsgs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [optionMessage, setOptionMessage] = useState(false);
  const [likeMessage, setLikeMessage] = useState(false);
  const [disLikeMessage, setDisLikeLikeMessage] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const menuOptions = [
    'Labeling Tool',
    'Auto Training Platform',
    'Process Automation',
    'Professinal Business Service',
    'Offshore Customer Support Center',
  ];
  // use this reference to access the previous state
  const prevClientMsgstRef = useRef();
  useEffect(() => {
    prevClientMsgstRef.current = clientMsgs;
  }, [clientMsgs]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        handleCloseChat();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatOptionRef.current && !chatOptionRef.current.contains(event.target)) {
        handleCloseOptionMessage();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };
  const showOptionMessage = (newMessages) => {
    setSelectedMessage(newMessages);
    setOptionMessage(!optionMessage);
  };
  const handleLike = (index) => {
    setChat((prevMessageList) =>
      prevMessageList.map((message, i) =>
        i === index ? {...message, isLike: true, isDislike: false} : message
      )
    );
  };

  const handleDisLike = (index) => {
    setChat((prevMessageList) =>
      prevMessageList.map((message, i) =>
        i === index ? {...message, isDislike: true, isLike: false} : message
      )
    );
  };
  const handleChangeMessage = (message) => {
    setNewMessages(message);
  };
  const handleBotResponse = (botResponse) => {
    const timeResponse = new Date().toLocaleTimeString();
    setChat((prevMessageList) => [
      ...prevMessageList,
      {
        message: botResponse,
        sender: 'bot',
        time: timeResponse,
        avatar: '/img/chatbot.png',
        isNew: true,
        isLike: likeMessage,
        isDislike: disLikeMessage,
      },
    ]);
    setIsLoading(false);
    setClientMsgs([]);
  };

  const buildClientMessage = (messageTokenArray) => {
    let clientMsg = '';
    messageTokenArray.forEach((token) => {
      clientMsg += token;
    });

    return clientMsg;
  };

  const handleErrorResponse = () => {
    setIsError(true);
    setIsLoading(false);
    setClientMsgs([]);
  };

  // define function for websocker returns message
  useEffect(() => {
    websocketRef.current = new WebSocket(ENDPOINT);

    websocketRef.current.onmessage = function (event) {
      var data = JSON.parse(event.data);

      // building client message token by token
      if (data.sender === 'bot' && data.type === 'stream') {
        if (data.message === '\n') {
          setClientMsgs((prevMsgs) => [...prevMsgs, '<br>']);
        } else {
          setClientMsgs((prevMsgs) => {
            return [...prevMsgs, data.message];
          });
        }
      }
      if (data.sender === 'bot' && data.type === 'end') {
        handleBotResponse(buildClientMessage(prevClientMsgstRef.current));
      }

      if (data.sender === 'bot' && data.type === 'error') {
        handleErrorResponse();
      }
    };
    return () => {
      websocketRef.current.close();
    };
  }, []);

  const handleCloseChat = () => {
    setShowChat(false);
  };
  const handleCloseOptionMessage = () => {
    setOpenMenu(false);
  };
  useEffect(() => {
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chat]);
  const handleKeyDown = (event) => {
    if (!isLoading && !isError && event.key === 'Enter') {
      inputRef.current.click();
    }
  };

  const handleSendMessage = (event) => {
    // event.preventDefault();
    if (newMessages) {
      setNewMessages('');
      setIsLoading(true);
      const timeSent = new Date().toLocaleTimeString();
      setChat((prevMessageList) => [
        ...prevMessageList,
        {message: newMessages, sender: 'user', time: timeSent},
      ]);
      let data = {user_ip: '00003', msg: newMessages};
      let jsonString = JSON.stringify(data);
      websocketRef.current.send(jsonString);
    }
  };
  const handleSendMessageOption = (option) => {
    if (option) {
      console.log(option);
      setIsLoading(true);
      const timeSent = new Date().toLocaleTimeString();
      setChat((prevMessageList) => [
        ...prevMessageList,
        {message: option, sender: 'user', time: timeSent},
      ]);
      setOpenMenu(false);
      let data = {user_ip: '00003', msg: option};
      let jsonString = JSON.stringify(data);
      websocketRef.current.send(jsonString);
    }
  };
  useEffect(() => {
    if (showChat && !hasBotGreeted) {
      setChat((prevChat) => [
        ...prevChat,
        {message: 'Hi, how can I help you?', sender: 'bot', isNew: true},
      ]);
      setHasBotGreeted(true);
      setIsLoading(false);
    }
  }, [showChat, hasBotGreeted]);
  return (
    <>
      <div ref={chatRef} className="chatbot-icon d-flex justify-content-end align-items-end p-4">
        <div className="fade-loading" onClick={() => setShowChat(!showChat)}>
          <img
            src="/img/chatbot.png"
            alt="chatbot"
            style={{width: '30px', height: '30px'}}
            onClick={() => setShowChat(!showChat)}
          />
        </div>

        <div className={`chat-window ${showChat ? '' : 'd-none'}`}>
          <div className="chat-header ">
            <div className="d-flex align-items-center ">
              <img src="/img/chatbot.png" alt="" style={{width: '36px', height: '36px'}} />
              <span className="chat-name">Chat cùng RainScales</span>
            </div>
            <div className="close-btn" onClick={handleCloseChat}>
              {/* <Image src="/img/minus.svg" width={7} height={1} alt="" /> */}
            </div>
          </div>
          <div
            ref={chatContainerRef}
            className={`chat-body d-flex flex-column ${openMenu} ? 'overlay' : ''`}
          >
            {chat.map((item, index) => {
              return (
                <>
                  <div
                    className={`d-flex align-items-center chat-container ${
                      item.sender === 'user' ? 'justify-content-end' : ''
                    }`}
                  >
                    {item.sender === 'bot' && (
                      <div className="avatar-container">
                        <img
                          src="/img/chatbot.png"
                          alt="avatar"
                          style={{width: '30px', height: '30px'}}
                        />
                      </div>
                    )}
                    <div
                      className={` message ${item.sender === 'user' ? 'text-user' : ''}`}
                      key={index}
                      style={{position: 'relative'}}
                    >
                      {item.message}
                      {item.time && (
                        <div
                          style={{
                            color: '#000000',
                            fontSize: '10px',
                            textAlign: item.sender === 'user' ? 'right' : 'left',
                            transform: 'translateY(50%)',
                            position: 'absolute',
                            left: item.sender === 'bot' ? '0px' : 'auto',
                            right: item.sender === 'user' ? '0px' : 'auto',
                          }}
                        >
                          {item.time}
                        </div>
                      )}
                    </div>
                    {item.sender === 'bot' && (
                      <div
                        className={`like-message position-relative ${item.isLike ? 'liked' : ''} ${
                          item.isDislike ? 'disliked' : ''
                        }`}
                        onClick={() => showOptionMessage(item)}
                      >
                        <img
                          src={`/img/${
                            item.isLike ? 'like' : item.isDislike ? 'dislike' : 'emoji'
                          }.svg`}
                          alt="like"
                        />
                        {optionMessage && item === selectedMessage && (
                          <div
                            className="option-message"
                            style={{position: 'absolute', top: '-40px'}}
                          >
                            <button className="btn-option" onClick={() => handleLike(index)}>
                              <img src="/img/like.svg" alt="like" />
                            </button>
                            <button className="btn-option" onClick={() => handleDisLike(index)}>
                              <img src="/img/dislike.svg" alt="dislike" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {item.sender === 'bot' && isLoading ? (
                      <div>
                        <div
                          className="bounce-loading "
                          style={{position: 'absolute', top: '85%', right: '50%'}}
                        >
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </>
              );
            })}
          </div>
          {isError && (
            <div>
              <p className="error-message">Something went wrong. Try again later!</p>
            </div>
          )}

          <div className="chat-footer">
            <div className="chat_menu" ref={chatOptionRef} onClick={handleClickMenu}>
              <img src="/img/menu.svg" alt="" />
              {openMenu && (
                <div className="chat_menu_option">
                  {menuOptions.map((option, index) => (
                    <div
                      className="chat_menu_option-item"
                      key={index}
                      onClick={() => handleSendMessageOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* <input
              type="text"
              placeholder="Write a message..."
              aria-label="Write a message..."
              aria-describedby="basic-addon2"
              value={message}
              className="chat_form-control"
              onKeyDown={handleKeyDown}
              onChange={(event) => setMessage(event.target.value)}
              disabled={isError}
            /> */}
            <div className="chat_form-control">
              {/* <img src="/img/emoji.svg" alt="" /> */}
              <InputEmoji
                value={newMessages}
                onChange={handleChangeMessage}
                onKeyDown={handleKeyDown}
                placeholder="Write a message..."
                style={{fontSize: '13px'}}
              />
            </div>
            <button
              ref={inputRef}
              type="submit"
              className="send-btn"
              onClick={handleSendMessage}
              disabled={isLoading || isError}
            >
              <div>
                <img src="/img/send.svg" alt="send" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
