const logRequest = (req , res , next) => {
  console.log(`Requesting Path ${req.path}`)
  next() 
}

module.exports = logRequest