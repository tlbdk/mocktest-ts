import { TestUser } from './test-user'

import * as functionExport from './test-function-export'

import * as functionExport2 from './test-function-export2'

describe('mocking', () => {
  beforeAll(() => {
    patchObject(functionExport)
    patchObject(functionExport2)
  })

  it('unctionExport.doStuff() should return mock', () => {
    expect(functionExport.doStuff()).toBe('mock')
  })

  it('unctionExport.doStuff() should return mock', () => {
    expect(functionExport2.doStuff()).toBe('mock')
  })

  it('TestUser.starImportWithFunctionCall() should return mock', () => {
    expect(TestUser.starImportWithFunctionCall()).toBe('mock')
  })

  it('TestUser.starImportWithFunctionCall2() should return mock', () => {
    expect(TestUser.starImportWithFunctionCall2()).toBe('mock')
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
