import React, { useEffect, useState } from 'react';
import {
  hubspot,
  DescriptionList,
  DescriptionListItem,
  Heading,
  Tile,
  Flex,
  Text,
} from '@hubspot/ui-extensions';

// Use hubspot.extend correctly
hubspot.extend((context) => {
  return <Extension {...context} />;
});

const Extension = ({ actions }) => {
  const { fetchCrmObjectProperties, onCrmPropertiesUpdate } = actions;
  const [properties, setProperties] = useState({});

  // Fetch initial properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const props = await fetchCrmObjectProperties(['firstname','city','lastname','lifecyclestage']);
        setProperties(props);
      } catch (error) {
        console.error('Error fetching CRM properties:', error);
      }
    };

    fetchProperties();
  }, [fetchCrmObjectProperties]);

  // Register properties update listener
  useEffect(() => {
    const unsubscribe = onCrmPropertiesUpdate(
      ['firstname', 'city','lastname','lifecyclestage'],
      (updatedProps) => {
        setProperties((prevProps) => ({
          ...prevProps,
          ...updatedProps,
        }));
      }
    );

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, [onCrmPropertiesUpdate]);

  return (
  
      <Flex direction="column" gap="sm">
          <Tile>
        <Heading>
          Contact Information
        </Heading>
        <Text>
        List of properties
        </Text>

        <DescriptionList direction="row">
          {Object.entries(properties).map(([key, value]) => (
            <DescriptionListItem key={key} label={key}>
              <Text format={{ fontWeight: 'bold' }}>{value}</Text>
            </DescriptionListItem>
          ))}
        </DescriptionList>
        </Tile>
        
      </Flex>
    

  );
};

