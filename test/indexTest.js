const expect = chai.expect;
describe('Fix the Scope', function() {
  
  describe('attemptTwoFavoriteCustomers', function(){
    it('unsuccessfully tries to declare favoriteCustomer with let two times', () => {
         var error;
         try {
          attemptTwoFavoriteCustomers()
        } catch (error) {
        var ErrorMessage = error.name
        
        expect(ErrorMessage).to.equal("SyntaxError")
        }
    
     })
  })
    
    
    var error;
try { foo() } catch (e) {
     error = e;
} finally { expect(error.name).to.equal('SomeError'); }
    
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob')
    })
  })

  describe('upperCaseCustomerName()', function() {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob')
      upperCaseCustomerName()
      expect(window.customerName).to.equal('BOB')
    })
  })
  describe('setBestCustomer()', function() {
    it('setBestCustomer', () => {
      expect(window.bestCustomer).to.equal(undefined)
      window.setBestCustomer()
      expect(window.bestCustomer).to.equal('not bob')
    })
  })

  describe('overWriteBestCustomer()', function() {
    it('overwrites the best customer', () => {
      overWriteBestCustomer()
      expect(window.bestCustomer).to.equal('maybe bob')
    })
  })

  describe('reassignLeastFavorite', function(){
    it('unsuccessfully tries to reassign the least favorite customer', () => {
      changeLeastFavoriteCustomer()
      expect(window.customer).to.equal(3)
    })
  })

  

})