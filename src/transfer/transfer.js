import styles from './transfer.module.css'
export function Transfer() {
    const onTransfer = e =>{
        e.preventDefault()
        const acId = e.target.acId.value
        const acNm = e.target.acNm.value
        const balance = e.target.balance.value
    }
    return (    
        <>
        <div className={styles.tfrCont}>
            <h1>Transfer amount</h1>
            <form onSubmit={onTransfer}>
                <input type='number' placeholder='Source Account Id' name='srcId'/>
                <input type='number' placeholder='Destination Account Id' name='dstId'/>
                <input type='number' placeholder='Amount' name='=amount' />
                <input type='submit' value='Transfer'/>
            </form>
        </div>
        </>
    )
}

