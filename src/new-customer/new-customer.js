import styles from './new-customer.module.css'

export function NewCustomer() {

    const onNewCustomer = e =>{
        e.preventDefault()
        const acId = e.target.acId.value
        const acNm = e.target.acNm.value
        const balance = e.target.balance.value
    }
    return (
        <div className={styles.custCont}>
            <h1>Create new customer</h1>
            <form onSubmit={onNewCustomer}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='text' placeholder='Account Name' name='acNm'/>
                <input type='number' placeholder='Balance' name='balance' />
                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}

