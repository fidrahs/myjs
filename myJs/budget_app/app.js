

    // BUDGET CONTROLLER
var budgetController = (function () {
    
    // EXPENSE OBJECT
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        }else{
            this.percentage = -1;
        }
        
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }
    // INCOME OBJECT
    function Income(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (current,index,array) {
            sum += current.value;
        });

        data.totals[type] = sum;
    }
    // DATA OBJECT
    var data  = {
        // EXP AND INC OBJECTS
        allItems: {
            exp: [],
            inc: []
        },
        // TOTALS
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, desc, val) {
            
            var newItem, ID;
            
            // NEW ID 
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else{
                ID = 0;
            }
            
            
            //NEW OBJECT EXP OR INC
            if (type === 'exp') {
                newItem = new Expense(ID, desc,val)
            } else if (type === 'inc') {
                newItem = new Income(ID, desc,val)
            }

            //PUSH IT INTO DATA 
            data.allItems[type].push(newItem);

            // RETURN NEW OBJECT 
            return newItem;
        },

        deleteItem: function (type,id) {
            var ids;
            
            ids = data.allItems[type].map(function (current) {
                return current.id;
            })

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function () {
            // CALCULATE TOTAL INCOME AND EXPENSE 
                calculateTotal('inc');
                calculateTotal('exp');
            // CALCULATE THE BUDGET
                data.budget = data.totals.inc - data.totals.exp;
            // CALCULATE PERCENTAGE

            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
                

        },

        calculatePercentages: function () {
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            });

        },

        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            console.log(allPerc);
            
            return allPerc;
            
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function () {
            console.log(data);
        }

    }

})();


// UI CONTROLLER 
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        incomePercentageLabel: '.budget__income--percentage',
        expenseLabel: '.budget__expenses--value',
        expensePercentageLabel: '.budget__expenses--percentage',
        container: '.container'

    }

    /*function inputs() {
        return{
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value        
            }
    }*/
    return{
        getInput: function () {
            return{
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value) 
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element ;
            // HTML
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html =  '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            
            // REPLACE PLACEHOLDER TEXT
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // INSERT HTML INTO THE DOM (insert )
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


        },

        deleteListItem: function (selectorID) {
            var el;
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        // CLEAR FIELDS
        clearFields: function () {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function (current, index, array) {
               current.value = ""; 
            });
            fieldsArray[0].focus();
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = '+ ' + obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = '- ' + obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.expensePercentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.expensePercentageLabel).textContent = '---';
            }
            
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();


    // GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        
        // LOAD EVERY VARIABLE ON THE UI
        var DOM = UICtrl.getDOMstrings();
        
        // CLICK EVENT      
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        // ENTER EVENT
        document.addEventListener('keypress' , function(e){
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();            
            }        
        });

        //Event Delegation
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };
        
    var updateBudget = function () {
        // Calculate budget
        budgetCtrl.calculateBudget();

        // Update budget
        var budget = budgetCtrl.getBudget();

        // Display budget on the UI
        //console.log(budget);
        
        UICtrl.displayBudget(budget);

    };

     var updatePercentages = function () {
         // 1. Calulate percentages
            budgetCtrl.calculatePercentages();
         // 2. read percentages from budget controller 
          var percentages =  budgetCtrl.getPercentages();
         // 3. Update UI percentages
         console.log(percentages);
         
     };

    var ctrlAddItem = function () {
        var input, newItem, newItemList;


        // Get the field input data 
        input = UIController.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        
            // Add the item to the UI
            UIController.addListItem(newItem, input.type);
        
            // Clear fields
            UIController.clearFields();

            // 5. Calculate and update budget
            updateBudget();

            // 6. Update porcentages
            updatePercentages();
        }        
    };

    var ctrlDeleteItem = function (e) {
        var itemID, splitID, type, ID;
        
        itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
        
        
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);        

            // 1. Delete item from data
                budgetCtrl.deleteItem(type,ID);

            // 2. delete item from UI
                UICtrl.deleteListItem(itemID);
            // 3. update and show the new budget
                updateBudget();
        }
        
    };



    
    return {
        init: function () {
            console.log('init');
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
                
        }
    };

})(budgetController, UIController);

controller.init();




