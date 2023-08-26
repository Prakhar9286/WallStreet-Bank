
import "../styles/AddBeneficiary.css";

export default function AddBeneficiary(){
    return (
      <div className="body">
      <h1 className="heading">Add New Beneficiary</h1>
      <form>
          <div className="form-group">
              <label for="name">Beneficiary Name</label>
              <input type="text" id="name" name="name" required></input>
          </div>
  
          <div className="form-group">
              <label for="email">Beneficiary Account Number</label>
              <input type="email" id="email" name="email" required></input>
          </div>
  
          <div className="form-group">
              <label for="subject">Re-Enter Account Number</label>
              <input type="text" id="subject" name="subject" required></input>
          </div>
  
          <div className="form-group">
              <label for="subject">Nick Name</label>
              <input type="text" id="subject" name="subject" required></input>
          </div>
  
          <input type="submit" value="Save"></input>
      </form>
  
      </div>
  
  
  );
    }