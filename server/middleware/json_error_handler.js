const jsonErr = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      // Handle JSON parsing error
      return res.status(400).json({ error: 'Invalid JSON format in req.body.' });
    }
    next();
  };

module.exports = jsonErr;