import React, { useState } from 'react'
import { fonts } from '../../global-style/global.style'
import Title from '../../components/Title'

import {
  ContactContainer,
  ContactSection,
  SpinnerContainer,
  SpinnerInner
} from './style'
import body3 from '../../assets/images_robust/pngwing3.png'

const Contact = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [contactInfo, setContactInfo] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const contact = {
      name,
      phone
    }

    setContactInfo(contact)
    setIsLoading(true)

    setTimeout(() => setIsLoading(false), 2000)

    setName('')
    setPhone('')
  }

  return (
    <ContactSection>
      <ContactContainer>
        <div className="containerForm">
          {isLoading ? (
            <SpinnerContainer>
              <SpinnerInner />
            </SpinnerContainer>
          ) : (
            <>
              {contactInfo ? (
                <>
                  <Title fontFamily={fonts.bebas} fontSize="82px">
                    Obrigado Pelo Interesse
                  </Title>
                  <p>
                    Recebemos seu contato e agradecemos pelo interesse em nossos
                    servicos, entraremos em contato o mais breve possivel.
                  </p>
                </>
              ) : (
                <>
                  <Title fontFamily={fonts.bebas} fontSize="82px">
                    Entre em contato
                  </Title>
                  <p>
                    Matricule-se agora mesmo! Fale com um de nossos atendentes
                  </p>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="nome"
                      value={name}
                      onChange={handleName}
                    />
                    <input
                      type="text"
                      placeholder="telefone"
                      value={phone}
                      onChange={handlePhone}
                    />
                    <button type="submit">solicitar contato</button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
        <img
          className="bodyWomanImage"
          src={body3}
          alt="mulher com pesos de academia"
        />
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
