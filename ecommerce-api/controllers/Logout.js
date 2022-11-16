exports.Logout=(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    console.log('Hello')
}