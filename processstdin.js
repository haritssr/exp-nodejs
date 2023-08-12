process.stdin.on('data', data => {
  console.log(`You type ${data.toString()}`);
  process.exit();
});
