## Benefits of off-chain payments
handling the majority of transactions off-chain can:
- eliminate the waiting time to verify that the transaction couldn't be revered
- eliminate the fees of posing each transaction on the chain

## How it works ?

### Setup

1. Alice make a transaction with the expected amount for the payments _e.g 50 BTC_, this transaction, let's name the intial transcation, can only spent using both Alice and Bob signatures.

1. Alice sends this transcation to Bob to sign it, so she can create the refund transaction.

1. Bob 

1. Alice creates a refund transaction whic is time locked transaction that can only be spent after a specific time, she and Bob defined earlier (_end of contract_)

1. Finally Alice posts the intial transcation on the chain.


### Payments

Let's assume that transactions is a project payments. Alice sends Bob a payment at each milestone. 
-  At milestone completion, Alice sends Bob a new Transaction to spend ing from the initial transaction by the agreed amount corresponding to the milestone

- In the end, Bob should post his last transaction received from Alice to get his money, OR Alice post the refund transaction if Bob didn't do the job.