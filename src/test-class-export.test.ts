import { TestClass } from './test-class-export'
import { TestUser } from './test-user'

describe('mocking', () => {
  beforeAll(() => {
    TestClass.prototype.doStuff = () => 'mock'
    TestClass.doMoreStuff = () => 'mock'
  })

  it('testClass.doStuff() should return mock', () => {
    const testClass = new TestClass()
    expect(testClass.doStuff()).toBe('mock')
  })

  it('TestClass.doMoreStuff() should return mock', () => {
    expect(TestClass.doMoreStuff()).toBe('mock')
  })

  it('TestUser.requireWithClassCall() should return mock', () => {
    expect(TestUser.requireWithClassCall()).toBe('mock')
  })

  it('TestUser.requireWithStaticClassCall() should return mock', () => {
    expect(TestUser.requireWithStaticClassCall()).toBe('mock')
  })

  it('TestUser.importWithClassCall() should return mock', () => {
    expect(TestUser.importWithClassCall()).toBe('mock')
  })

  it('TestUser.importWithStaticClassCall() should return mock', () => {
    expect(TestUser.importWithStaticClassCall()).toBe('mock')
  })

  it('TestUser.starImportWithClassCall() should return mock', () => {
    expect(TestUser.starImportWithClassCall()).toBe('mock')
  })

  it('TestUser.starImportWithStaticClassCall() should return mock', () => {
    expect(TestUser.starImportWithStaticClassCall()).toBe('mock')
  })

  it('TestUser.starRequireWithClassCall() should return mock', () => {
    expect(TestUser.starRequireWithClassCall()).toBe('mock')
  })

  it('TestUser.starRequireWithStaticClassCall() should return mock', () => {
    expect(TestUser.starRequireWithStaticClassCall()).toBe('mock')
  })
})
