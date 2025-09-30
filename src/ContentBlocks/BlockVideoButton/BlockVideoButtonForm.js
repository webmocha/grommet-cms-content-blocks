/* @flow */
import React from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import validation from '../BlockButton/validation';
import type { OnChangeEvent } from '../../types';
import iconMap from '../BlockButton/iconMap';

export type ButtonType = 'Button' | 'Anchor';
export type Primary = 'True' | 'False';
export type IconType =
  'primary' |
  'email' |
  'chat' |
  'share' |
  'attachment' |
  'word' |
  'zip' |
  'document download' |
  'download' |
  'play' |
  'print';

type State = {
  label: ?string,
  primary: ?Primary,
  buttonType: ?string,
  icon?: IconType,
  video: ?{
    path?: string,
    title?: string,
  },
  error: {
    label: ?string,
    video: ?string,
  }
};

type Props = {
  pad?: boolean,
  onSubmit?: Function,
  onChange?: Function,
  label?: string,
  children?: React$Element<any>,
  primary?: Primary,
  buttonType?: ButtonType,
  icon?: IconType,
  video?: {
    path?: string,
    title?: string,
  },
  data?: Object
};

const getFileExtension = path => {
  const baseName = path.split(/[\\/]/).pop();
  const pos = baseName.lastIndexOf(".");
  return pos > 0 ? baseName.slice(pos + 1).toLowerCase() : "";
};

const videoExtensions = new Set(["mp4", "mov", "avi", "webm", "mkv"]);

const isVideoFile = path => videoExtensions.has(getFileExtension(path));
export default class BlockVideoButtonForm extends React.Component {
  static defaultProps = {
    pad: false,
  }

  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formIsValid = this.formIsValid.bind(this);

    const { label, primary, buttonType, icon, video } = props.data || props;
    const labelInput = label || '';
    const primaryInput = primary || 'True';
    const buttonTypeInput = buttonType || 'Button';
    const iconInput = icon || 'primary';
    const videoInput = video || { path: '', title: '' };

    this.state = {
      label: labelInput,
      primary: primaryInput,
      buttonType: buttonTypeInput,
      icon: iconInput,
      video: videoInput,
      error: {
        label: null,
        video: null,
      },
    };
  }

  state: State;

  componentWillReceiveProps({ video, data }: Props) {
    if (video && video !== this.state.video) {
      this.setState({
        video,
      });
      if (this.props.onChange) {
        this.props.onChange({
          target: {
            id: 'video',
            value: video,
          },
        });
      }
    }
    if (data) {
      this.setState({ ...data });
    }
  }

  onChange: (e: OnChangeEvent) => void;
  onChange(e: OnChangeEvent) {
    const { target, option } = e;
    let value;

    if (option) {
      value = option;
    } else if (target.id === 'video') {
      // Handle video path input
      const currentValue = this.state[target.id] || {};
      value = {
        ...currentValue,
        path: e.value || target.value,
      };
    } else {
      value = target.type === 'checkbox' ? target.checked : target.value;
    }

    this.setState({
      [`${target.id}`]: value,
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onSubmit: (event: SyntheticInputEvent) => void;
  onSubmit(event: SyntheticInputEvent) {
    event.preventDefault();
    if (this.formIsValid() && this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  props: Props;

  formIsValid: () => boolean;
  formIsValid() {
    const { label, video } = this.state;

    const labelError = validation.validLength(label)
      ? null
      : 'Please enter a valid label';

    const videoError = (video && video.path && isVideoFile(video.path))
      ? null
      : 'Please select a video file';

    this.setState({
      error: {
        label: labelError,
        video: videoError,
      },
    });

    return labelError === null && videoError === null;
  }

  render() {
    const { children, pad } = this.props;
    const {
      label,
      primary,
      buttonType,
      icon,
      video,
      error,
    } = this.state;

    return (
      <Box colorIndex="light-2" pad={pad ? 'medium' : 'none'}>
        <Form>
          <FormFields>
            <fieldset>
              <FormField
                label="Label"
                error={error.label}
                help="Enter a label that will appear on the button"
                htmlFor="label"
              >
                <input
                  id="label"
                  name="label"
                  type="text"
                  value={label}
                  onChange={this.onChange}
                />
              </FormField>

              <FormField
                label="Select Video"
                error={error.video}
                help="Select a video file that will play when the button is clicked"
                htmlFor="video"
              >
                <input
                  id="video"
                  name="video"
                  type="text"
                  value={video && video.path ? video.path : ''}
                  onChange={this.onChange}
                  placeholder="/path/to/video.mp4"
                />
              </FormField>

              {primary === 'True' && buttonType === 'Anchor' ?
                <FormField
                  label="CTA Icon"
                  htmlFor="icon"
                  help="Add an optional icon to the CTA."
                >
                  <Select
                    onChange={this.onChange}
                    value={icon || 'primary'}
                    options={Object.keys(iconMap)}
                    name="icon"
                    id="icon"
                  />
                </FormField>
              :
                null
              }

              <FormField
                label="Button Type"
                htmlFor="buttonType"
                help="What type of button would you like to use? Button or Anchor?"
              >
                <Select
                  onChange={this.onChange}
                  value={buttonType || ''}
                  options={['Button', 'Anchor']}
                  name="buttonType"
                  id="buttonType"
                />
              </FormField>

              <FormField
                label="Primary"
                htmlFor="primary"
                help={buttonType === 'Anchor'
                  ? 'Should the anchor have the arrow icon in front of it?'
                  : 'Should the button be filled in with the brand color?'
                }
              >
                <Select
                  onChange={this.onChange}
                  value={primary || ''}
                  options={['True', 'False']}
                  name="primary"
                  id="primary"
                />
              </FormField>
            </fieldset>
            {children && children}
          </FormFields>
          <Footer pad="medium">
            <Button
              onClick={this.onSubmit}
              type="submit"
              label="Done"
            />
          </Footer>
        </Form>
      </Box>
    );
  }
}