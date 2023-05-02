import * as EmailValidator from 'email-validator'
import * as cpf from 'validation-br/dist/cpf'
import * as cnh from 'validation-br/dist/cnh'
import * as cnpj from 'validation-br/dist/cnpj'
import * as judicialProcess from 'validation-br/dist/judicialProcess'

export class GeneralValidator {
  //
  public IsEmail (email: string): boolean {
    return EmailValidator.validate(email)
  }

  public IsCpf (posibleCpf: number | string): boolean {
    return cpf.validate(posibleCpf)
  }

  public IsCnh (posibleCnh: number | string): boolean {
    return cnh.validate(posibleCnh)
  }

  public IsCnpj (posibleCnpj: number | string): boolean {
    return cnpj.validate(posibleCnpj)
  }

  public IsJudicialProcess (posibleJudicialProcess: string): boolean {
    return judicialProcess.validate(posibleJudicialProcess)
  }
}

export default GeneralValidator
