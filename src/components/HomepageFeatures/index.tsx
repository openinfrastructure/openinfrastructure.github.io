import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  id: string;
  scale: number;
  fill: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloud Architecture',
    id: 'cloudArch',
    scale: 0.8,
    fill: '#D7DBDD',
    Svg: require('@site/static/img/cloud_providers.svg').default,
    description: (
      <>
        Moving your private datacenter workloads to the cloud? We're here to
        help with our experience building automation tools for Google Cloud
        and Amazon Web Services.
      </>
    ),
  },
  {
    title: 'Platform Engineering',
    id: 'platformEng',
    scale: 0.8,
    fill: '#D7DBDD',
    Svg: require('@site/static/img/platform.svg').default,
    description: (
      <>
        We provide comprehensive Platform Engineering services to help large
        organizations build cloud-native platforms that are highly scalable,
        resilient, and secure.
      </>
    ),
  },
  {
    title: 'Puppet Software Development',
    id: 'puppetDev',
    fill: '#D7DBDD',
    scale: 1,
    Svg: require('@site/static/img/undraw_puppet.svg').default,
    description: (
      <>
        Our world-class professionals were founding members of the Puppet and
        DevOps community.  Leverage our experience to refactor your Puppet code
        base and scale your infrastructura to millions of nodes.
      </>
    ),
  },
];

function Feature({scale, fill, id, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Svg transform={"scale(" + scale + ")"} fill={fill} id={id} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
