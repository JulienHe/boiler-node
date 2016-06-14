exports.index = function(req, res){
  res.render('index', { 
  	title: 'Node Reactjs boilerplate',
  	name: 'Julien Henrotte'
  });
};