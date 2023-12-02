import * as Web3 from '@solana/web3.js'

// key -> connection -> instruction -> transaction
const main = async () => {
    const publicKey = new Web3.PublicKey('EQb8LApPTtZFk3cY7WcaAmEvuL6s3Q1q8ozxcPcBJ5dc') // key

    const url = Web3.clusterApiUrl('devnet') // connection
    const connection = new Web3.Connection(url)

    const balance = await connection.getBalance(publicKey) // instruction & transaction
    console.log('balance', balance)
}

main();