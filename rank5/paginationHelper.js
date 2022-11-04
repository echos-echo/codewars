// TODO: complete this object/class

// You will complete the PaginationHelper class,
// which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values
// and an integer indicating how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant.

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pageItems = collection.reduce(function(prev, item, ind) {
      let pageNum = Math.floor(ind / itemsPerPage); // otherwise the index of the array
      if (prev[pageNum]) {
        prev[pageNum].push(item);
        return prev;
      } else {
        prev.push([item]);
        return prev;
      }
    }, []);
    this.pages = this.pageItems.length;
    //this.pages = Math.floor(collection.length / itemsPerPage);
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return this.pages;
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    return this.pageItems[pageIndex] ? this.pageItems[pageIndex].length : -1;
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    const perPage = this.itemsPerPage;
    let pageIndex = this.pageItems.findIndex(function(page, pageInd) {
      let exists = page.some(function(item, ind) {
        if ((perPage * pageInd) + ind === itemIndex) return true
        else return false;
      })
      return exists;
    });
    return pageIndex;
  }

  // test cases
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1