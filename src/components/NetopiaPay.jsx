import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from 'semantic-ui-react';
import { getParentUrl } from '@plone/volto/helpers';
import { getNetopiaSign } from '@plone-collective/volto-netopia/actions';

const NetopiaPay = (props) => {
  const dispatch = useDispatch();
  const signed_order = useSelector((state) => state.netopiaSign);
  const { location } = props;

  React.useEffect(() => {
    dispatch(getNetopiaSign(getParentUrl(location.pathname)));
  }, [dispatch, location.pathname]);

  return (
    <Container>
      <Form action={signed_order?.server} method="post">
        <input type="hidden" name="env_key" value={signed_order?.env_key} />
        <input type="hidden" name="data" value={signed_order?.data} />
        <input type="submit" value="Continue to payment" />
      </Form>
    </Container>
  );
};

export default NetopiaPay;
