 class UserCard {
    constructor(role, email, password) {
        this.role = role;
        this.email = email;
        this.password = password;
    }

    render() {
        return `
        <div class="container">
        <div class="row">
        <div class="col-4">
        <div class="card">
                <h3>${this.role}</h3>
                <p>Email: ${this.email}</p>
                <p>Password: ${this.password}</p>
            </div>
             </div>
              </div>
              </div>
            

        `;
    }
}

class CreditCard extends UserCard {
    constructor(role, email, cardNumber, expiry) {
        super(role, email, "N/A");
        this.cardNumber = cardNumber;
        this.expiry = expiry;
    }

    render() {
        return super.render().replace(
         ` <p>Password: N/A</p>`,
          `<p>Card: ${this.cardNumber}</p><p>MM/YY: ${this.expiry}</p>`
        );
    }
}

document.getElementById("cards-container").innerHTML = [
  new UserCard("Student:", "student@lisbo.com", "123456"),
  new UserCard("Instructor:", "instructor@lisbo.com", "123456"),
  new UserCard("Admin:", "admin@lisbo.com", "123456"),
  new CreditCard("Test Credit Card:", "student@lisbo.com", "4242 4242 4242 4242", "02/23")
].map(card =>`<div class="col-4"><div class="cards"><div class="card">${card.render()}</div></div></div>`).join("");




class UserFunction{
  constructor(role, email, password) {
      this.role = role;
      this.email = email;
      this.password = password;
  }

  render() {
      return `
      <div class="container">
      <div class="row">
      <div class="col-4">
      <div class="card">
              <h3>${this.role}</h3>
              <p>Email: ${this.email}</p>
              <p>Password: ${this.password}</p>
          </div>
           </div>
            </div>
            </div>
          

      `;
  }
}

class MyFunction extends HTMLElement{
  connectedCallback(){
    this.render()
  }

  render(){

    const title = this.getAttribute('title') || 'Default Title';
    this.innerHTML=`
          <img src="./assets/Scss/image/function.png" alt="function-logo">
          <span>${title}</span>
    `
  }  
}

customElements.define("function-container",MyFunction)