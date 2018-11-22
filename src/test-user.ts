// Class imports
import { TestClass as importTestClass } from './test-class-export'
const { TestClass } = require('./test-class-export')
import * as TestClassImport from './test-class-export'
const testClassRequire = require('./test-class-export')

// Function imports
import { doStuff as importDoStuff } from './test-function-export'
const functionRequire = require('./test-function-export')

// Not able to monkey patch
const { doStuff } = require('./test-function-export')
import * as functionImport from './test-function-export'
import * as functionImport2 from './test-function-export2'

export class TestUser {
  public static importWithClassCall() {
    const testClass = new importTestClass()
    return testClass.doStuff()
  }

  public static importWithStaticClassCall() {
    return importTestClass.doMoreStuff()
  }

  public static requireWithClassCall() {
    const testClass = new TestClass()
    return testClass.doStuff()
  }

  public static requireWithStaticClassCall() {
    return TestClass.doMoreStuff()
  }

  public static starImportWithClassCall() {
    const testClass = new TestClassImport.TestClass()
    return testClass.doStuff()
  }

  public static starImportWithStaticClassCall() {
    return TestClassImport.TestClass.doMoreStuff()
  }

  public static starRequireWithClassCall() {
    const testClass = new testClassRequire.TestClass()
    return testClass.doStuff()
  }

  public static starRequireWithStaticClassCall() {
    return testClassRequire.TestClass.doMoreStuff()
  }

  public static starImportWithFunctionCall() {
    return functionImport.doStuff()
  }

  public static starImportWithFunctionCall2() {
    return functionImport2.doStuff()
  }

  public static importWithFunctionCall() {
    return importDoStuff()
  }

  public static requireWithFunctionCall() {
    return functionRequire.doStuff()
  }

  public static starRequireWithDirectFunctionCall() {
    return doStuff()
  }
}
