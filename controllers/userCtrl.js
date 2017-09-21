var users = [
    {
      name: 'Preston McNeil',
      password: 'password1',
      friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
      name: 'Ryan Rasmussen',
      password: '$akgfl#',
      friends: ['Lindsey Mayer']
    },
    {
      name: 'Terri Ruff',
      password: 'hunter2',
      friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
      name: 'Lindsey Mayer',
      password: '777mittens777',
      friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
  ];


  module.exports = {
        login: (req, res, next)=>{
        console.log(req.body);
        const { name } = req.body;
        const password = req.body.password;
        
        const person = users.find(cur => cur.name == name);

        if (person.password == password){
            req.session.currentUser = person;
            return res.send({ userFound: true });
        } else {
            res.send({ userFound: false });
        }

        }
  }