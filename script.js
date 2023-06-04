// getMenu() function
function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = '<h2>Menu</h2>';
        data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.innerHTML = `<p>${item.name} - ${item.price}</p>`;
          menuDiv.appendChild(itemDiv);
        });
  
        
        const orderBtn = document.getElementById('orderBtn');
        orderBtn.disabled = false;
  
        return data;
      })
      .catch(error => {
        console.log('Error:', error);
        throw error;
      });
  }
  
  // TakeOrder() function
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = [
          { name: 'Cheeseburger', price: 5 },
          { name: 'Hamburger', price: 4 },
          { name: 'Bacon Burger', price: 6 },
          { name: 'Veggie Burger', price: 4 },
          { name: 'Chicken Burger', price: 6 }
        ];
        const order = {
          items: []
        };
        for (let i = 0; i < 3; i++) {
          const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
          order.items.push(randomBurger);
        }
        resolve(order);
      }, 2500);
    });
  }
  
  // orderPrep() function
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // payOrder() function
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // thankyouFnc() function
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Promise handling and chaining
  document.getElementById('getMenuBtn').addEventListener('click', () => {
    getMenu()
      .catch(error => console.log('Error:', error));
  });
  
  document.getElementById('orderBtn').addEventListener('click', () => {
    takeOrder()
      .then(order => {
        console.log('Order:', order);
        const prepBtn = document.getElementById('prepBtn');
        prepBtn.disabled = false;
        return order;
      })
      .catch(error => console.log('Error:', error));
  });
  
  document.getElementById('prepBtn').addEventListener('click', () => {
    orderPrep()
      .then(orderPreparation => {
        console.log('Order Preparation:', orderPreparation);
        const payBtn = document.getElementById('payBtn');
        payBtn.disabled = false;
        return orderPreparation;
      })
      .catch(error => console.log('Error:', error));
  });
  
  document.getElementById('payBtn').addEventListener('click', () => {
    payOrder()
      .then(payment => {
        console.log('Payment:', payment);
        thankyouFnc();
      })
      .catch(error => console.log('Error:', error));
  });
  