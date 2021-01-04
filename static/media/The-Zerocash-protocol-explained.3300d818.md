Zerocash is a protocol that provides a privacy-preserving decentralized crypto-currency. Similar to Bitcoin as it has public transactions and any user has to broadcast the transaction to this network to be verified, However, differs from Bitcoin as it has a different transaction that hides the sender's address, receiver's address, and the payment amount.

While the addresses of the Bitcoin account are not tied directly to a user. Many recent works show that the blockchain could be observed to learn the user's habits of spending which may reveal some information about the user's identity and could lead to the user's real identity if interact with physical locations. 

## Zerocash transactions

Zerocash extends the Bitcoin protocol by introducing two new types of transactions: **mint transactions** and **pour transactions**. Zerocash introduced a new anonymous coin that exists alongside the non-anonymous one, which is called **Basecoin**.

### Mint transaction

The mint transaction allows user to transfer BaseCoin (non-anonymous) into Zerocash coin (**Zerocoin**) that belongs to a zerocash address.

![Zerocash protocol](/assets/posts/The-Zerocash-protocol-explained/Zerocash.jpg)

As the figure shows, the mint transactions consist of a commitment ***cm*** to the new coin specifying the coin's value and the owner's address, and unique serial number ***sn*** which will be used later on while spending. The commitment based on SHA-256 hash function.

- r, s, ρ (\rho) are randmoness
- v is the coin value
- $a_sk$ is address private key, $a_pk$ is address public key

Each new commitment is added to the Merkle tree and broadcasted to the network, so it can be easily verified. However, The commitment is anonymouns as it hides the owner address and coin value.

### pour transaction
The pour transaction allow user to make private payments to anothe zerocahs address.

To make the payment:
- The payer needs the payee's public address to generate a new commitment.
- The serial number ***sn*** of the spend coin to check for double-spending.
- A Zero-Knowledge Proof that proves the ownership of the spend coin, that the coin appeared in a previous transaction either mint or out of previous pour transaction, and that the total value of the inputs equals to the output.

### Transaction Verification

- The payer sends the randomness (r, s, ρ) he uses to create the new coin to the payee using the payee public key.
- The payee verify that the commitment is consistent with these recieved values.

## Notes
- Zerocash protocol use Zero-Knowledge to prove the ownership rather than merkle tree to make the ownership proof private.
- Zerocash protocol uses zero-knowledge Succinct Non-interactive ARguments of Knowledge (zk-SNARK) systems as it is short and can be easily verified in milliseconds.