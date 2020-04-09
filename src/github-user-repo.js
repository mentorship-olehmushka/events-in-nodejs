const axios = require('axios');

const getUserRepo = async (user,repoName) => {
  const urlBuilder = `https://api.github.com/users/${user}/repos`;
  try {
    const repositories = await axios.get(urlBuilder);
    const isRepoExist = repositories.data.find(({ name }) => name === repoName );
    let message = isRepoExist
      ? `Congratulations!!!!!! \n ${user} has ${repoName} repository`
      : `Unfortunately we can't find ${repoName} in ${user}'s repositories`;

    console.log(message);
  } catch(error) {
    console.log(error);
  }
};

//check if module called with two argument
if (process.argv.length !== 4) {
  console.log('There are two required arguments: \n1. [User name] \n2. [Repo name]');
} else {
  getUserRepo(process.argv[2], process.argv[3]);
}

