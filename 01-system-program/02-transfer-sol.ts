import * as Web3 from '@solana/web3.js'
import Dotenv from 'dotenv'
import base58 from 'bs58'
Dotenv.config()

// key -> connection -> instruction -> transaction
const main = async () => {
    const secretKey = process.env.PRIVATE_KEY;
    const decoded = base58.decode(secretKey as any)
    const userKeypair = Web3.Keypair.fromSecretKey(decoded)

    const url = Web3.clusterApiUrl('devnet') // connection
    const connection = new Web3.Connection(url)

    const publicKeyTo = new Web3.PublicKey('D1LF8nZj44qqB7EdMzpbnVB533Ud7uKr81ksw3cbmce5') //jaspalkey

    const transaction = new Web3.Transaction().add(
        Web3.SystemProgram.transfer({
            fromPubkey: userKeypair.publicKey,
            toPubkey: publicKeyTo,
            lamports: 1000000000,
        })
    )

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [userKeypair]
    )

    console.log('SIGNATURE', signature)

}

main();