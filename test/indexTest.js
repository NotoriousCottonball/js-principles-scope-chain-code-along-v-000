const expect = chai.expect;
describe('Fix the Scope', function() {
  
  describe('attemptTwoFavoriteCustomers', function(){
    it('unsuccessfully tries to declare favoriteCustomer with let two times', () => {
         try {
        let result1 = await window.attemptTwoFavoriteCustomers
    } catch (error) {
        //  assign error.message to ErrorMessage
        var ErrorMessage = error.message;
        //  catch it and  re throw it in assret.throws fn and pass the error.message as argument and assert it is the same message expected
        assert.throws(() => { throw new Error(ErrorMessage) },'This user already exists');
    }
    })
    
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
})