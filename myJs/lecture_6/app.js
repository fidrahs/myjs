var budgetController = (function(){
    var Expense = function (id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        }
    }
    
    
})();

var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    //Some code
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }

    return {

    }

})();

var controller = (function (budgetCtrl, UICtrl) {
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings;

        document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
        
        
    };

    return {
        init: function () {
            setupEventListeners();
        }
    }

    
})(budgetController,UIController);


controller.init();

let i= 26;

for (let i = 0; i < 0; i++) {
    console.log(i)  // 0, 1, 2, 3, 4
}

console.log(i); //26

function test() {
    var x = 5;  
};
console.log(x);