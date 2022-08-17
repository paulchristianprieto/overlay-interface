import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useModalOpen, useTermsOfServiceModalToggle} from '../../state/application/hooks'
import {ApplicationModal} from '../../state/application/actions'
import {SolidColorButton} from '../Button/Button'
import {TEXT} from '../../theme/theme'
import {FlexRow} from '../Container/Container'
import Modal from '../Modal/Modal'

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  background: #0b0f1c;
`

// @TO-DO: Combine UserAcceptButton and UserDeclineButton
const UserAcceptButton = styled(SolidColorButton)`
  width: 150px;
  padding: 4px;
  color: #12b4ff;
  font-size: 14px;
  margin-right: 8px;
  background: transparent;
  border: 2px solid #12b4ff;

  :hover {
    box-shadow: 0 0px 5px #12b4ff;
    text-decoration: underline;
  }
`

const UserDeclineButton = styled(SolidColorButton)`
  width: 150px;
  padding: 4px;
  color: #d0d0d2;
  font-size: 14px;
  background: transparent;
  border: 1px solid #d0d0d2;

  :hover {
    box-shadow: 0 0px 5px #d0d0d2;
    text-decoration: underline;
  }
`

export default function TermsOfServiceModal() {
  const termsOfServiceModalOpen = useModalOpen(ApplicationModal.TERMS_OF_SERVICE)

  const toggleTermsOfServiceModal = useTermsOfServiceModalToggle()

  const modalOpen = true
  return (
    <Modal
      isOpen={modalOpen}
      onDismiss={toggleTermsOfServiceModal}
      minHeight={false}
      maxHeight={90}
    >
      <ModalContent>
        <TEXT.BoldSmallBody lineHeight={1.5} m={'auto'}>
          Please carefully read through the Terms of Service Agreement. By clicking "Accept", the
          user is acknowledging to abide by the Terms of Service.
        </TEXT.BoldSmallBody>
        <FlexRow m={'16px auto 8px'}>
          <UserAcceptButton onClick={toggleTermsOfServiceModal}>Accept</UserAcceptButton>
          <UserDeclineButton>Decline</UserDeclineButton>
        </FlexRow>
      </ModalContent>
    </Modal>
  )
}
