import React from 'react';

const PythonConsole: React.FC = () => {
  const src = "https://trinket.io/embed/python3/c6f6a360f4?outputOnly=true&runOption=console";
//   const src = "http://brython.info/console.html";
//   const src = "https://create.withcode.uk/";
    // const src ="https://www.pythonanywhere.com/embedded3/";

  return (
    <iframe 
      src={src}
      width="100%" 
      height="300px"
      border = "none"
    />
  );
}

export default PythonConsole;

