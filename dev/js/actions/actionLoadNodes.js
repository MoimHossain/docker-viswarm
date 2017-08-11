import * as ACTIONS from './actionTypes';

// The default data when the API is unreachable
var ___x = {
	"objects": [{
		"ID": "5uduljzedkfaolouzcit7gldj",
		"Version": {
			"Index": 64
		},
		"CreatedAt": "2017-08-09T10:49:10.60817254Z",
		"UpdatedAt": "2017-08-09T12:07:50.010147217Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000003",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "down",
			"Message": "heartbeat failure",
			"Addr": "10.0.0.9"
		}
	}, {
		"ID": "6d7rdqguz5jh4du59jb28rfak",
		"Version": {
			"Index": 64
		},
		"CreatedAt": "2017-08-09T10:48:57.982982359Z",
		"UpdatedAt": "2017-08-09T12:07:50.010207317Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000005",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "down",
			"Message": "heartbeat failure",
			"Addr": "10.0.0.11"
		}
	}, {
		"ID": "8n33xey45an64fuln0w19nsmg",
		"Version": {
			"Index": 65
		},
		"CreatedAt": "2017-08-09T10:41:25.714259613Z",
		"UpdatedAt": "2017-08-09T12:07:50.062098318Z",
		"Spec": {
			"Labels": {},
			"Role": "manager",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-manager0",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747013632
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "ready",
			"Addr": "10.0.0.4"
		},
		"ManagerStatus": {
			"Reachability": "reachable",
			"Addr": "10.0.0.4:2377"
		}
	}, {
		"ID": "efodvok4fxtmd9ithfjec9d8p",
		"Version": {
			"Index": 65
		},
		"CreatedAt": "2017-08-09T10:48:48.671226002Z",
		"UpdatedAt": "2017-08-09T12:07:50.062045918Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000001",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "ready",
			"Addr": "10.0.0.7"
		}
	}, {
		"ID": "jlbuytfkb54ys4twz4jql4i7d",
		"Version": {
			"Index": 64
		},
		"CreatedAt": "2017-08-09T10:48:50.913809471Z",
		"UpdatedAt": "2017-08-09T12:07:50.010297117Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000006",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "down",
			"Message": "heartbeat failure",
			"Addr": "10.0.0.12"
		}
	}, {
		"ID": "o7y9e3b6822wg8ub4efe565y3",
		"Version": {
			"Index": 65
		},
		"CreatedAt": "2017-08-09T10:41:32.303561114Z",
		"UpdatedAt": "2017-08-09T12:07:50.062133918Z",
		"Spec": {
			"Labels": {},
			"Role": "manager",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-manager1",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747013632
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "ready",
			"Addr": "0.0.0.0"
		},
		"ManagerStatus": {
			"Leader": true,
			"Reachability": "reachable",
			"Addr": "10.0.0.5:2377"
		}
	}, {
		"ID": "q47p5wzquvd9mz3blziqlseuw",
		"Version": {
			"Index": 66
		},
		"CreatedAt": "2017-08-09T10:48:29.20026252Z",
		"UpdatedAt": "2017-08-09T12:07:51.028084102Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000002",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "ready",
			"Addr": "10.0.0.8"
		}
	}, {
		"ID": "qxef1tnsgiimqiqs5xwwfego0",
		"Version": {
			"Index": 67
		},
		"CreatedAt": "2017-08-09T10:48:54.79183574Z",
		"UpdatedAt": "2017-08-09T12:07:54.519454104Z",
		"Spec": {
			"Labels": {},
			"Role": "worker",
			"Availability": "active"
		},
		"Description": {
			"Hostname": "swarm-worker000004",
			"Platform": {
				"Architecture": "x86_64",
				"OS": "linux"
			},
			"Resources": {
				"NanoCPUs": 1000000000,
				"MemoryBytes": 1747345408
			},
			"Engine": {
				"EngineVersion": "17.06.0-ce",
				"Plugins": [{
					"Type": "Log",
					"Name": "awslogs"
				}, {
					"Type": "Log",
					"Name": "fluentd"
				}, {
					"Type": "Log",
					"Name": "gcplogs"
				}, {
					"Type": "Log",
					"Name": "gelf"
				}, {
					"Type": "Log",
					"Name": "journald"
				}, {
					"Type": "Log",
					"Name": "json-file"
				}, {
					"Type": "Log",
					"Name": "logentries"
				}, {
					"Type": "Log",
					"Name": "splunk"
				}, {
					"Type": "Log",
					"Name": "syslog"
				}, {
					"Type": "Network",
					"Name": "bridge"
				}, {
					"Type": "Network",
					"Name": "host"
				}, {
					"Type": "Network",
					"Name": "macvlan"
				}, {
					"Type": "Network",
					"Name": "null"
				}, {
					"Type": "Network",
					"Name": "overlay"
				}, {
					"Type": "Volume",
					"Name": "local"
				}]
			},
			"TLSInfo": {
				"TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUPIOBr5mPbyoDvhXQFUkk6q6CZMwwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwODA5MTAzNjAwWhcNMzcwODA0MTAz\nNjAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABH2g+Ar5siaO42L6qob7l0jyex6NKCZ7HEoJ0wad+JWIBalzc3d1olbgpg8Y\nJ4xrnrspQJvuwXBJde4j8855dRSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBShi4gN1GiQgFLeNVw4Hb9o9fbCazAKBggqhkjO\nPQQDAgNIADBFAiAh+57Tt/kNyamz3jxZ3w3wc4wKuODhzqGaraIfmRFQxAIhAMf0\naYiW9Br1g1eCnqYmpUe7xaHim55UGhdn0hOpWS5c\n-----END CERTIFICATE-----\n",
				"CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
				"CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfaD4CvmyJo7jYvqqhvuXSPJ7Ho0oJnscSgnTBp34lYgFqXNzd3WiVuCmDxgnjGueuylAm+7BcEl17iPzznl1FA=="
			}
		},
		"Status": {
			"State": "ready",
			"Addr": "10.0.0.10"
		}
	}]
};

function getAllNodesAsync(data) {
    return {
        type: ACTIONS.GET_NODES,
        payload: data
    };
}


export default function getAllNodes() {
    return dispatch => {        
        axios.get('/api/nodes')
             .then(res => {
                 dispatch(getAllNodesAsync(res.data || []));
             }, error => {
                 dispatch(getAllNodesAsync(___x.objects));
             });
    }
}