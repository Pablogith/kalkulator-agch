import React from 'react'
import PropTypes from 'prop-types'
import ToggleSubject from './ToggleSubject'
import DeleteSubject from './DeleteSubject'
import PrimarySubjectsDatalist from './PrimarySubjectsDatalist'
import LingualSubjectsDatalist from './LingualSubjectsDatalist'
import { primarySubjects } from '../../constants/SubjectTypes'

let Subject = ({ id, name, elementaryScore, advancedScore,
                 active, onChange, onToggleClick, onDelete, subjectsType }) => {
  let formInput = {
    name,
    elementaryScore,
    advancedScore
  }

  return (
    <table className='table mb-0'>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Przedmiot</th>
          <th>Wynik z matury podstawowej</th>
          <th>Wynik z matury rozszerzonej</th>
          <th>{/* {active ? 'Nie bierz pod uwagę': 'Bierz pod uwagę'} */}</th>
          <th>{/* Usuń {subjectsType === primarySubjects ? 'przedmiot' : 'język'} */}</th>
        </tr>
        <tr>
          <td>
            {id}
          </td>
          <td>
            <input
              type='text'
              list={subjectsType}
              ref={node => { formInput.name = node }}
              onChange={() => onChange(id, formInput.name.value, elementaryScore, advancedScore)}
              className={active ? 'subject-active subject-input-field' : 'subject-not-active subject-input-field'}
            />

            {subjectsType === primarySubjects
              ? <PrimarySubjectsDatalist subjectsType={subjectsType} />
              : <LingualSubjectsDatalist subjectsType={subjectsType} />
            }
          </td>
          <td>
            <input
              type='range'
              defaultValue='0'
              min='0'
              max='100'
              ref={node => { formInput.elementaryScore = node }}
              onChange={() => onChange(id, name, parseInt(formInput.elementaryScore.value, 10), advancedScore)}
            />

            &nbsp; {elementaryScore === 0 ? 'Brak' : elementaryScore + '%'}
          </td>
          <td>
            <input
              type='range'
              defaultValue='0'
              min='0'
              max='100'
              ref={node => { formInput.advancedScore = node }}
              onChange={() => onChange(id, name, elementaryScore, parseInt(formInput.advancedScore.value, 10))}
            />

            &nbsp; {advancedScore === 0 ? 'Brak' : advancedScore + '%'}
          </td>
          <td>
            <ToggleSubject
              id={id}
              active={active}
              onToggleClick={onToggleClick}
            />
          </td>
          <td>
            <DeleteSubject
              id={id}
              onDelete={onDelete}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

Subject.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  elementaryScore: PropTypes.number.isRequired,
  advancedScore: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subjectsType: PropTypes.string.isRequired
}

export default Subject