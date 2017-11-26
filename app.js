  // IIFE
  (function ($, window, document) {
    //  $ is now locally scoped 
    // Listen for the jQuery ready event on the document
    $(function () {
      // The DOM is ready!
      var myButton = $("a#myButton");
      myButton.on("click", function (e) {
        e.preventDefault();
        var text = $('textarea.textarea').val();
        console.log(text);
        addAMessage(text);
      });
    });

    var messages = [{
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Mayer',
        date: '20/11/2017',
        time: '22:30',
        text: 'Lorem ipsum ding elit. Ab, fuga. Reiciendis id maxime voluptatibus, sunt pariatur quia totam magni, animi libero ipsum cum doloremque soluta eos tempora mollitia expedita. Dolores laudantium quibusdam temporibus excepturi porro culpa? Iure perspiciatis aliquam ipsum illo dicta fuga, corporis provident ipsam? Dolor impedit maiores explicabo!'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Jeff-Bezos',
        date: '20/11/2017',
        time: '22:30',
        text: 'Some more text'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Sundar Pichai',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Rick Sanchez',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Morty Smith',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Summer Smith',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Beth Sanchez',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Miki Haymoviz',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Yoram Arbel',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      },
      {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'Abu Gosh',
        date: '20/11/2017',
        time: '22:30',
        text: 'Extra text on the side'
      }
    ];

    //initializing the messages with content to the render for the first time. 
    var messagesToRender = [messages[2], messages[1], messages[0]];
    //lastIndex value will keep increasing, this can be used for statistics.
    var lastIndex = 2;

    /**
     * 
     * Renders three messages.
     * @param {array} data 
     */
    function renderMessages(data) {
      //verify data is an array.
      if (!Array.isArray(data)) {
        throw data;
      }
      //makes sure the array only has 3 items.
      else if (data.length !== 3) {
        throw 'data length should be 3.';
      }
      var dynamicItems = '',
        list = $('ul.messages');

      //creating three list items according to data.
      $.each(data, function (index, value) {
        if (index === 0) {
          dynamicItems +=
            `<li>
          <div class="preview-list-row animated fadeIn">
          <div class="inner-content">
              <p class="text-data">
                  <img class="image" src=${value.imageUrl} />
                  <span class="name-data">${value.name}</span> <br/>
                  <span class="time-data">${value.date} ${value.time}</span>
                  ${value.text}
              </p>
          </div></li>`;
        } else {
          dynamicItems += `<li><div class="preview-list-row animated slideDown">
          <div class="inner-content">
              <p class="text-data">
                  <img class="image" src=${value.imageUrl} />
                  <span class="name-data">${value.name}</span> <br/>
                  <span class="time-data">${value.date} ${value.time}</span>
                  ${value.text}
              </p>
          </div></li>`;
        }
      });
      //appending the items all at once(for better performance ).
      list.empty().append(dynamicItems);
    }

    /**
     * Adding a string to the end of messages Array.
     * 
     * @param {String} inputText 
     */
    function addAMessage(inputText) {
      //make sure the input type is the correct one.
      if (typeof (inputText) !== 'string') {
        console.log(typeof (inputText));
        throw inputText;
      }
      var inputData = {
        imageUrl: 'http://via.placeholder.com/50x50',
        name: 'User',
        date: moment().format('DD/MM/YYYY'),
        time: moment().format('HH:mm'),
        text: inputText
      };

      messages.push(inputData);
    }
    /**
     * 
     * Iterating over messages array, adding/removing items to a queue (messagesToRender).
     * 
     * Using an interval to invoke this function on a loop
     * 
     */
    function loopOverMessages() {
      renderMessages(messagesToRender);
      messagesToRender.pop();
      messagesToRender.unshift(messages[(lastIndex + 1) % messages.length]);
      lastIndex += 1;
    }

    loopOverMessages();
    setInterval(loopOverMessages, 5000);

  }(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter