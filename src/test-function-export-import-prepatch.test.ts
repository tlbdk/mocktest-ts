import * as functionExport from './test-function-export'

// Patch functionExport before we load anything that uses our lib
function patchObject(target: any) {
  target.default = () => 'mock'
  target.doStuff = () => 'mock'
}
patchObject(functionExport)

import { TestUser } from './test-user'

describe('mocking', () => {
  beforeAll(() => {
    //
  })

  it('unctionExport.doStuff() should return mock', () => {
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
