import styles from './withdraw.module.css'

export function Withdraw() {

    const onWithdraw = (e) =>{
        e.preventDefault()
        const acId = e.target.acId.value
        const amount = e.target.amount.value
    }


    return (
        <div className={styles.withCont}>
            <h1>Deposit amount</h1>
            <form onSubmit={onWithdraw}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='number' placeholder='Amount' name='=amount' />
                <input type='submit' value='Deposit'/>
            </form>
        </div>
    )
}

