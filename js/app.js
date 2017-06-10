$(() => {
  let titleInput = $(".title-input");
  let noteInput = $(".note-input");
  let createBtn = $("#create-btn");
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
  //    1.1 Check if title and content != null - checkCard();
  //    1.2 If != null save title and content of the card - saveCard();
  //    1.3 Create a template for a new card next to the saved card. - createTemplate();
  //    1.4 createCard();
  // 2. Edit a note
  //    2.1 Get title and content value of the card and make it editable - $.val();
  //    2.2 Check if content and title != null - checkCard();
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
    const cardTitle = $(event.target).parent().parent().children().first();
    const title = $(event.target).parent().siblings().first().children().first();
    const titleVal= $(event.target).parent().siblings().first().children().first().val();
    const textarea = $(event.target).parent().siblings().last().children().first();
    const textareaVal = $(event.target).parent().siblings().last().children().first().val();

    if(titleVal || textareaVal) {
      title.replaceWith('<h2 class="card-title-text">' + titleVal + '</h2>');
      textarea.replaceWith('<p class="card-content-text">' + textareaVal + '</p>');
      deleteNote.appendTo(cardTitle);
      $('.edit-icon').show();
    }

    if($(event.target).attr('id')) {
      $(event.target).removeAttr('id');
    }

    $(event.target).addClass('edit-note');
    $(event.target).text('EDIT NOTE');
    newCardContent.clone().insertAfter($('.card-wrapper').children().last());
  }

  function checkCard() {
    titleVal= $(event.target).parent().siblings().first().children().first().val();
    const textareaVal = $(event.target).parent().siblings().last().children().first().val();
    if(!titleVal || !textareaVal) {
      console.log('error');
    }
    return [titleVal, textareaVal];
  }

  function removeCard() {
    const deleteButtonContainer = $(event.target).parent().parent();
    deleteButtonContainer.remove();
  }

  function editCard() {
    const h2 = $(event.target).parent().siblings().first().children().first();
    const h2val = $(event.target).parent().siblings().first().children().first().val();
    const p = $(event.target).parent().siblings().last().children().first();
    const pVal = $(event.target).parent().siblings().last().children().first().val();

    $(event.target).attr('id', 'save-btn')
    h2.replaceWith('<input type="text" placeholder="Enter title of the note" class="title-input" />').val(h2val);
    p.replaceWith('<textarea placeholder="What do you want to note down?" class="note-input">' + pVal + '</textarea>');
  };





  function saveCard() {
    const h2 = $(event.target).parent().siblings().first().children().first();
    console.log(h2);
    const h2val = $(event.target).parent().siblings().first().children().first().val();
    const p = $(event.target).parent().siblings().last().children().first();
    const pVal = $(event.target).parent().siblings().last().children().first().val();
    if(h2val && pVal) {
      h2.replaceWith('<h2 class="card-title-text">' + titleVal + '</h2>');
      p.replaceWith('<p class="card-content-text">' + textareaVal + '</p>');
    }
  };
});
