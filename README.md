# events-in-nodejs (Hometask)

1. Create tool for handling events from CLI:\
   for example:
   `yarn <some_command> <first_arg> <second_arg>...`;

2. You should use eventEmmiter for handling events, and these events should be triggered (`<some_emmiter>.emit(<some_event_name>)`) by args;

3. Handle errors by correct way (it should not exit with not zero code)

4. Use modules for separation of logic of different commands;

Events and way of handling:

- calc: example: `yarn calc add 1 2` => output: 3\
  make it for add, subtract, multiply, divide. It should take only 2 parameters for calculations

- timer: example: `yarn timer 12` => every second it return rest of seconds(11, 10, 9,..) and after it stop it do not put anything in output. Please use setInterval for it. It should take only 1 parameter

- github-user-repo: `yarn github-user-repo <username> <repo_name>` => output: \<username\> has (no) \<repo_name\>\
  You should make request to Github Api to get info about some user by username and check if it has some repository. Use `axios` for it (it was already added to `package.json`)
