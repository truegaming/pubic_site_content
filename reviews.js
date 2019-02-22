jQuery(document).ready(function() {
  jQuery(".sidebar-reviews-rate-number").click(function() {
    rate = jQuery(this);
    // Retrieve post ID from data attribute
    post_id = rate.data("post_id");
    post_rate = rate.data("post_rate");
    //console.log(post_id);
    //console.log('clicked a number with rate ' + post_rate);
    //Ajax call
    jQuery.ajax({
      type: "post",
      url: ajax_var.url,
      data: "action=reviews&nonce=" + ajax_var.nonce + "&post_rate=" + post_rate + "&post_id=" + post_id,
      success: function(res) {
        //console.log('ajax success: ' + res);
        //If vote successful
        if (res !== "already") {
          jQuery(".sidebar-reviews-info-nrate").text(post_rate);
          jQuery(".sd-header-review-rate").text(res);
          var totalVoteCount = jQuery("#total-vote-count");
          var newTotalVoteCount = parseInt(totalVoteCount.text(), 10) + 1;
          //console.log(newTotalVoteCount);
          totalVoteCount.text(newTotalVoteCount);
        }
      }
    });

    return false;
  })
})
