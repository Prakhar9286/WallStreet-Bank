import styles from './deposit.module.css'

export function Deposit() {

    const onDeposit = (e) =>{
        e.preventDefault()
        const acId = e.target.acId.value
        const amount = e.target.amount.value
    }


    return (
        <div className={styles.depCont}>
            <h1>Deposit amount</h1>
            <form onSubmit={onDeposit}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='number' placeholder='Amount' name='=amount' />
                <input type='submit' value='Deposit'/>
            </form>
        </div>
    )
}

