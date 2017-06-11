$(() => {
  let deleteNote = $('<span class="edit-icon>DELETE NOTE</span>');
  let newCardContent = $("<li/>", { class: "card-container" }).append(
    $("<div/>", { class: "card-title" }).append(
      $("<input/>", {
        class: "title-input",
        type: 'text',
        placeholder: 'Enter title of note',
      }),
      $("<span/>", {
        class: "edit-icon",
        text: "DELETE NOTE",
      })
    ),
    $("<div/>", { class: "card-content" }).append(
      $("<textarea/>", {
        class: "note-input",
        placeholder: "What do you want to note down?"
      })
    ),
    $("<div/>", { class: "card-footer" }).append(
      $("<button/>", {
        id: "create-btn",
        text: "CREATE NOTE"
      })
    )
  );

  // 1. Create a note
  //    1.1 Check if title and content != null
  //    1.2 If != null save title and content of the card
  //    1.3 Create a template for a new card next to the saved card.
  //    1.4 createCard();
  // 2. Edit a note
  //    2.1 Get title and content value of the card and make it editable - $.val();
  //    2.2 Check if content and title != null
  //    2.3 saveCard();
  // 3. Remove card
  //    3.1 removeCard();

  $(document).on("click", "button#create-btn", function() {
    createCard();
  });
  $(document).on("click", "span.edit-icon", function() {
    removeCard();
  })
  $(document).on("click", "button.edit-note", function() {
    editCard();
  })
  $(document).on("click", "button.save-note", function() {
    saveCard();
  })

  function createCard() {
    console.log('Greetings from createCard()');
    const cardTitle = $(event.target).parent().parent().children().first();
    const title = $(event.target).parent().siblings().first().children().first();
    const titleVal= $(event.target).parent().siblings().first().children().first().val();
    const textarea = $(event.target).parent().siblings().last().children().first();
    const textareaVal = $(event.target).parent().siblings().last().children().first().val();

    if(titleVal && textareaVal) {
      title.replaceWith('<h2 class="card-title-text">' + titleVal + '</h2>');
      textarea.replaceWith('<p class="card-content-text">' + textareaVal + '</p>');
      deleteNote.appendTo(cardTitle);
      $('.edit-icon').show();
      console.log('Success from createCard()');
    } else {
      console.log('Whoops from createCard()');
      return;
    }

    if($(event.target).attr('id')) {
      $(event.target).removeAttr('id');
    }

    $(event.target).addClass('edit-note');
    $(event.target).text('EDIT NOTE');
    newCardContent.clone().insertAfter($('.card-wrapper').children().last());
  }

  function removeCard() {
    console.log('Greetings from removeCard()');
    const deleteButtonContainer = $(event.target).parent().parent();
    deleteButtonContainer.remove();
    console.log('Success from removeCard()');
  }

  function editCard() {
    console.log('Greetings from editCard()');
    const h2 = $(event.target).parent().siblings().first().children().first();
    const span = $(event.target).parent().siblings().first().find('span');
    const h2val = $(event.target).parent().siblings().first().children().first().text();
    const p = $(event.target).parent().siblings().last().children().first();
    const pVal = $(event.target).parent().siblings().last().children().first().text();
    span.hide();
    if(h2val && pVal) {
      h2.replaceWith('<input type="text" placeholder="Enter title of the note" class="title-input" />');
      $(event.target).parent().siblings().first().children().first().attr('value', h2val);
      p.replaceWith('<textarea placeholder="What do you want to note down?" class="note-input"></textarea>');
      $(event.target).parent().siblings().last().children().first().text(pVal);
      console.log('Success from editCard()');
    } else {
      console.log('Whoops from editCard()');
      return;
    }
    $(event.target).attr('class', 'save-note');
    $(event.target).text('SAVE NOTE');
  };

  function saveCard() {
    console.log('Greetings from saveCard()');
    const h2 = $(event.target).parent().siblings().first().children().first();
    const h2val = $(event.target).parent().siblings().first().children().first().val();
    const span = $(event.target).parent().siblings().first().find('span');
    const p = $(event.target).parent().siblings().last().children().first();
    const pVal = $(event.target).parent().siblings().last().children().first().val();
    if(h2val && pVal) {
      h2.replaceWith('<h2 class="card-title-text">' + h2val + '</h2>');
      p.replaceWith('<p class="card-content-text">' + pVal + '</p>');
      $(event.target).attr('class', 'edit-note');
      $(event.target).text('EDIT NOTE');
      span.show();
      console.log('Success from saveCard()');
    } else {
      console.log('Whoops from saveCard()');
      return;
    }
  };
});
