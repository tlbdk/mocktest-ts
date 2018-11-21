import { TestUser } from './test-user'

// tslint:disable-next-line:no-var-requires
const functionExport = require('./test-function-export')

describe('mocking', () => {
  beforeAll(() => {
    patchObject(functionExport)
  })

  it('should return mock', () => {
    expect(functionExport.doStuff()).toBe('mock')
  })

  it('TestUser.starImportWithFunctionCall() should return mock', () => {
    expect(TestUser.starImportWithFunctionCall()).toBe('mock')
  })

  it('TestUser.importWithFunctionCall() should return mock', () => {
    expect(TestUser.importWithFunctionCall()).toBe('mock')
  })

  it('TestUser.requireWithFunctionCall() should return mock', () => {
    expect(TestUser.requireWithFunctionCall()).toBe('mock')
  })

  it('TestUser.starRequireWithDirectFunctionCall() should return mock', () => {
    expect(TestUser.starRequireWithDirectFunctionCall()).toBe('mock')
  })
})

function patchObject(target: any) {
  target.default = () => 'mock'
  target.doStuff = () => 'mock'
}
