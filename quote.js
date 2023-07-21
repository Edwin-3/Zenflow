const getRandomQuote = async () => {
    const response = await fetch(
      'https://api.quotable.io/random?tags=inspiration|motivation|love|life|productivity|health|spirituality&maxLength=90'
    );
    const data = await response.json();
    return {
        content: data.content,
        author: data.author
    };
  };
  
  const renderQuote = (quote) => {
    document.getElementById('quote').innerHTML = quote.content;
    document.getElementById('author').innerHTML = quote.author;
  };
  
  const main = async () => {
    const quote = await getRandomQuote();
    renderQuote(quote);
  };
  
  main();
  