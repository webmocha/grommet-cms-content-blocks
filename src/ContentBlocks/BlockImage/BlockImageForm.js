import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import { MarkdownHelpButton } from '../Shared';

export class BlockImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image || '',
      link: props.link || '',
      content: props.content || '',
      alt: props.alt || '',
      borderColor: props.borderColor || 'none',
      title: props.title || '',
      icon: props.icon || 'none',
      heading: props.title ? 'title' : (props.icon && props.icon !== 'none' ? 'icon' : 'none'),
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps({ image, url, link, title, icon }) {
    if (image && image !== this.state.image) {
      this.setState({ image });
    }
    if (url !== this.props.url && this.props.url !== '') {
      this.setState({ image: `${this.props.url}` });
    }
    if (link && link !== this.props.link) {
      this.setState({ link });
    }
    if (title && title !== this.props.title) {
      this.setState({ title });
    }
    if (icon && icon !== this.props.icon) {
      this.setState({ icon });
    }
  }

  onChange(e) {
    const { target, option } = e;
    const key = target.id;
    const val = option || target.value;

    const obj = {};
    obj[key] = val;
    
    if(key === 'heading') {
      if (val === 'title') {
        obj.icon = 'none';
      } else if (val === 'icon') {
        obj.title = '';
      } else {
        obj.title = '';
        obj.icon = 'none';
      }
    }


    this.setState(obj);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  validateForm() {
    const { image } = this.state;
    return image !== '';
  }

  render() {
    const { image, content, alt, borderColor, link, title, icon, heading } = this.state;
    const { children } = this.props;
    const submit = this.validateForm() ? this.onSubmit : undefined;

    return (
      <Box colorIndex="light-2" pad="medium">
        <MarkdownHelpButton />
        <Form compact={false} onSubmit={submit}>
          <FormFields>
            <fieldset>
              <FormField label="Heading" htmlFor="heading">
                <Select
                  id="heading"
                  name="heading"
                  inline={false}
                  options={['none', 'title', 'icon']}
                  value={heading}
                  onChange={this.onChange}
                />
              </FormField>
              {heading === 'title' && (
                <FormField label="Title" htmlFor="title">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title || ''}
                    onChange={this.onChange}
                  />
                </FormField>
              )}
              {heading === 'icon' && (
                <FormField label="Icon" htmlFor="icon">
                  <Select
                    id="icon"
                    name="icon"
                    inline={false}
                    options={['do', 'doNot', 'limitedUse']}
                    value={icon === 'none' ? '' : icon}
                    onChange={this.onChange}
                  />
                </FormField>
              )}
              <FormField label="Content" htmlFor="content">
                <textarea
                  autoFocus
                  id="content"
                  rows="3"
                  name="content"
                  type="text"
                  value={content}
                  onChange={this.onChange}
                />
              </FormField>
              <FormField label="Alt Tag" htmlFor="alt">
                <input
                  id="alt"
                  name="alt"
                  type="text"
                  value={alt}
                  onChange={this.onChange}
                />
              </FormField>
              <FormField label="Image file path" htmlFor="image">
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={image.path || ''}
                  onChange={this.onChange}
                />
              </FormField>
              <FormField label="Border Color" htmlFor="borderColor">
                <Select
                  id="borderColor"
                  name="borderColor"
                  inline={false}
                  options={['none', 'red', 'green']}
                  value={borderColor}
                  onChange={this.onChange}
                />
              </FormField>
              <FormField label="Image Link" htmlFor="link">
                <input
                  id="link"
                  name="link"
                  type="text"
                  value={link || ''}
                  onChange={this.onChange}
                />
              </FormField>
              {children && children}
            </fieldset>
            <Button
              onClick={submit}
              primary={false}
              type="submit"
              label="Done"
            />
          </FormFields>
        </Form>
      </Box>
    );
  }
}

BlockImageForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
  alt: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.object, // eslint-disable-line
  link: PropTypes.string,
  borderColor: PropTypes.oneOf(['none', 'red', 'green']),
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default BlockImageForm;
