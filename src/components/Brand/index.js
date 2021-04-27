import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import placeholder from './placeholder.svg';

import styles from './styles.scss';

const BrandCard = ({ urlBrand, urlImage, title, category, addresses }) => (

  <div>
    <a href={urlBrand} className={styles.brandCard}>

    <div className={styles.brandCard__image}><img src={urlImage}/></div>

      <div className={styles.brandCard__body}>
        <div className={styles.brandCard__title}>{title}</div>

        <div className={styles.brandCard__category}>{category}</div>

        <div className={styles.brandCard__address}>
          {addresses.map((address) => (
              <React.Fragment>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.brandCard__icon} />
                {address}{' '}
              </React.Fragment>
          ))}

        </div>
      </div>
    </a>
  </div>
)

BrandCard.defaultProps = {
  urlBrand: '',
  urlImage: placeholder,
  title: 'Titulo',
  category: 'Categoria',
  addresses: ['Calle numero, Localidad'],

};

BrandCard.propTypes = {
  urlBrand: PropTypes.string,
  urlImage: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  addresses: PropTypes.array,
};

export default BrandCard;



