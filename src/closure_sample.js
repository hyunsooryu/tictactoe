function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`입금: ${amount}, 현재잔액: ${balance}`);
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`출금: ${amount}, 현재잔액: ${balance}`);
      }else{
        console.log(`잔액 부족`);
      }
    },
  };
}
